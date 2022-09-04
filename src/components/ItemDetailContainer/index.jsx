import React, {useEffect, useState}  from 'react'

import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';

const games = [
  {id: 1, image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fimgs.hipertextual.com%2Fwp-content%2Fuploads%2F2022%2F01%2Fcall-of-duty.jpeg%3Ffit%3D1920%252C1080%26quality%3D50%26strip%3Dall%26ssl%3D1&imgrefurl=https%3A%2F%2Fhipertextual.com%2F2022%2F02%2Fque-no-haya-nuevo-call-of-duty-en-2023&tbnid=9exfDL9_Mw8nkM&vet=12ahUKEwi5uaDnte_5AhWBrZUCHYkGC98QMygBegUIARDgAQ..i&docid=zgiUbg97PGlodM&w=1920&h=1080&q=call%20of%20duty&ved=2ahUKEwi5uaDnte_5AhWBrZUCHYkGC98QMygBegUIARDgAQ",
   category: 'games', title: "Moder Warfare"},
  { id: 2, image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.27881.14284165171924425.328fdc67-fafc-4929-b10f-b1bc44a36c07.c0b3f5d8-f2b7-41db-9b1b-0c1ddb375729%3Fq%3D90%26w%3D480%26h%3D270&imgrefurl=https%3A%2F%2Fwww.xbox.com%2Fes-AR%2Fgames%2Fstore%2Fcall-of-duty-vanguard-edicion-estandar%2F9NQQ8B4PJR25%2F0010&tbnid=P2upfpC4kN-XcM&vet=12ahUKEwi5uaDnte_5AhWBrZUCHYkGC98QMygPegUIARD_AQ..i&docid=Av8rgBg7-uzKqM&w=480&h=270&q=call%20of%20duty&ved=2ahUKEwi5uaDnte_5AhWBrZUCHYkGC98QMygPegUIARD_AQ",
  category: 'DLC', title: "Vanguard" },
  {  id: 3, image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-images.win.gg%2Fresize%2Fw%2F620%2Fformat%2Fwebp%2Ftype%2Fprogressive%2Ffit%2Fcover%2Fpath%2Fwp%2Fuploads%2F2021%2F12%2Fcall-of-duty-ffranchise.jpg&imgrefurl=https%3A%2F%2Fwin.gg%2Fnews%2Fthese-are-all-the-call-of-duty-games-and-what-sets-them-apart%2F&tbnid=3lzpuwr5tYuJlM&vet=10CEkQMyiIAWoXChMI2N6Ns7fv-QIVAAAAAB0AAAAAEAI..i&docid=1gv1PdE9B1L0WM&w=620&h=281&q=call%20of%20duty&ved=0CEkQMyiIAWoXChMI2N6Ns7fv-QIVAAAAAB0AAAAAEAI",
  category: 'games',title: "COD"},
  {  id: 4, image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2016/03/579396-call-duty-black-ops-3-mapas-dlc-awakening-gratis-ps4-este-fin-semana.jpg?itok=JQ_nOcic",
  category: 'DLC',title: "COD"},
  {  id: 5, image: "https://9to5fortnite.com/wp-content/uploads/2021/08/zombies-chronicles-die-rise-feature-image-780x470.jpg",
  category: 'games',title: "COD"},

];


export const ItemDetailContainer = () => {
   const [data, setData] = useState({});
   const { detalleid } = useParams();

   useEffect(() => {
     const getDate = new Promise(resolve => {
       setTimeout(() => {
         resolve(games);
       }, 3000);
     });

     getDate.then(res => setData(res.find(games => games.id === parseInt(detalleid))));
   }, [])

  return (
    <ItemDetail data={data} />
  );
}

export default ItemDetailContainer;