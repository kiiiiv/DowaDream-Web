function MyPageAxiosTest(){
    const [shoes, setShoes] = useState(data);
    return (
      <div className="container">
        <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((결과)=>{
                console.log(결과.data)
                let copy = [...shoes, ...결과.data]; //결과의 괄호 벗기고 합침
                setShoes(copy);
            })
            Promise.all([axios.get('/url1'),axios.get('/url2') ]) //2개 다 성공 할 때
            .then(()=>{
                
            })
        }}></button>
      </div> 
    );
  }
  
  export default MyPageAxiosTest;