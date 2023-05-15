import React from 'react'
import styles from '@/app/packagescard/packagecard.module.css'
import Link from 'next/link'

function PackagesCard({ title, price, imgg, favour1,
  favour2, favour3, favour4, favour5, favour6, favour7,
  favour8, favour9, favour10, favour11, favour12, favour13, favour14,

}) {

  return (<>

    <div className={styles.container}>
      <img className={styles.imgclass} src={imgg} width='400px' height='300px' />
      <h1 className={styles.h1}>{title}</h1>
      <h3 className={styles.h1}>{price}</h3>
      <div className={styles.favColor}>
        <p>{favour1}</p>
        <p>{favour2}</p>
        <p>{favour3}</p>
        <p>{favour4}</p>
        <p>{favour5}</p>
        <p>{favour6}</p>
        <p>{favour7}</p>
        <p>{favour8}</p>
        <p>{favour9}</p>
        <p>{favour10}</p>
        <p>{favour11}</p>
        <p>{favour12}</p>
        <p>{favour13}</p>
        <p>{favour14}</p>
      </div>
      <div className={styles.btn}>
        <a className={styles.btntext}  href="#">Book Now</a>
        </div>
    </div>

  </>)
}

export default PackagesCard