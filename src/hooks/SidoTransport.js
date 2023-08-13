import React from 'react'
import { SidoGugun } from '../assets/Sidogugun';

export const SidoTransport = (data) => {
  
        const processedArray = [];
        const Sido = data[0];
        const gugun = data[1];
    
        let fullName = "";
    
        if (Sido === "제주") {
            fullName = "제주특별자치도";
        } else if (Sido === "충북") {
            fullName = "충청북도";
        } else if (Sido === "충남") {
            fullName = "충청남도";
        } else if (Sido === "전북") {
            fullName = "전라북도";
        } else if (Sido === "전남") {
            fullName = "전라남도";
        } else if (Sido === "경북") {
            fullName = "경상북도";
        } else if (Sido === "경남") {
            fullName = "경상남도";
        } else if (Sido === "강원") {
            fullName = "강원도";
        } else if (Sido === "울산") {
            fullName = "울산광역시";
        } else if (Sido === "광주") {
            fullName = "광주광역시";
        } else if (Sido === "대구") {
            fullName = "대구광역시";
        } else if (Sido === "부산") {
            fullName = "부산광역시";
        } else if (Sido === "인천") {
            fullName = "인천광역시";
        } else if (Sido === "경기") {
            fullName = "경기도";
        } else if (Sido === "서울") {
            fullName = "서울특별시";
        }
    
        var loc = 0;
        

        SidoGugun.map((item,index)=>{
            if(item[0].sidoName===fullName){
                loc = index;
                console.log(item[0].sidoCd)
            }
        })

        const gugunCodeArray = [];

        SidoGugun[loc].map((item, index) => {
            if (gugun === item.gugunName) {

                gugunCodeArray.push(item.gugunCd);
                console.log(item.gugunCd);
            }
        });
    
        return {
            sidoCode: SidoGugun[loc][0].sidoCd,
            gugunCode: gugunCodeArray,
        };
};
