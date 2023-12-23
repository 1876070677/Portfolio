import React, {useState, useEffect} from 'react';
import styles from './section3.module.css';
import { GET_PORTFOLIO } from '../../static/link';
import {useSelector} from 'react-redux';
import RequestServer from '../../Axios/Requst';

function Portfolio () {

    const [act, setAct] = useState([]);

    const page = useSelector(state => {
        return state.animate.pageIdx;
    })

    const prev = useSelector(state => {
        return state.animate.prevPage;
    })

    const effect = useSelector(state => {
        return state.animate.effectNum;
    })

    useEffect(() => {
      RequestServer("get", GET_PORTFOLIO).then(response => {
        if (response.code === 0) {
          setAct(response.content);
        }
      })
    })

    return (
      <section className={`${styles.animated_section} ${page === 2 && `on${effect}`} ${page !== 2 && prev === 2 && `off${effect}`} ${page !== 2 && prev !== 2 && `disable`}`}>
        <div className={styles.section_content}>
            <div className={styles.page_title}>
              <h2>Portfolio</h2>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.portfolio_content}>
                  {act.map(data => {
                    return (
                      <figure className={styles.item}>
                        <a href={data.href} target="_blank" rel="noreferrer">
                          <h4>> <span>{data.name}</span> - {data.content}</h4>
                          <h5><span>-> 사용기술 : </span>{data.tech}</h5>
                          <h5><span>-> 역할 : </span>{data.role}</h5>
                        </a>
                      </figure>
                    )
                  })}
                </div>
              </div>
            </div>
        </div>
      </section>  
    )
}

export default Portfolio;