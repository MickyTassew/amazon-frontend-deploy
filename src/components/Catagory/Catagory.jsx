import React from 'react'
import CatagoryCard from './CatagoryCard'
import { catagoryInfos } from './catagoryFullinfos'
import classes from './Catagory.module.css'

function Catagory() {
  return (
    <div className={classes.catagory__container}>
        {
            catagoryInfos.map((infos)=> (
                <CatagoryCard data = {infos} />
            ))
        }
    </div>
  )
}

export default Catagory