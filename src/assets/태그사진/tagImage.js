import {Info} from '../../../public/tagImage/공익인권.svg'

export const getImageName = (tag) => {
    console.log(tag);
  switch(tag) {
    case "공익.인권":
        console.log("공익인권.svg");
      return "공익인권.svg";
    case "교육":
      return "교육.svg";
    case "국제행사":
      return "국제행사.svg";
    case "국제협력.해외봉사":
      return "국제협력해외봉사.svg";
    case "농어촌 봉사":
      return "농어촌.svg";
    case "문화행사":
      return "문화행사.svg";
    case "멘토링":
      return "멘토링.svg";
    case "보건의료":
      return "보건의료.png";
    case "상담":
      return "상담.svg";
    case "생활편의지원":
      return "생활편의.svg";
    case "안전.예방":
      return "안전예방.svg";
    case "자원봉사교육":
      return "자원봉사교육.svg";
    case "재해ㆍ재난":
      return "재난재앙.svg";
    case "주거환경":
      return "주거환경.svg";
    case "행정보조":
      return "행정보조.svg";
    case "환경보호":
      return "환경.svg";
    //기타
    default:
      return "공익인권.svg";
  }
};



//"공익.인권","교육","국제행사","국제협력.해외봉사","농어촌 봉사", "문화행사", "멘토링", "보건의료","상담","생활편의지원","안전.예방","자원봉사교육","재해ㆍ재난","주거환경","행정보조","환경보호","기타"