import{r as s,j as t,s as r,B as a,T as c}from"./index-4d70b8e7.js";import{G as n,T as l,e as p}from"./api-3bdf9ca4.js";import{m as d}from"./motion-c906bd5b.js";import{B as x}from"./Button-687616dc.js";import{B as m,D as u}from"./Styles-4a833a87.js";import"./isHostComponent-d28e0aa6.js";import"./ButtonBase-db38e2fe.js";import"./assertThisInitialized-63c63aaf.js";const h=({children:e,width:i="fit-content"})=>{const o=s.useRef(null);return t.jsx("div",{style:{position:"relative",width:i},ref:o,children:t.jsx(d.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",whileInView:"visible",transition:{delay:.15,duration:.5},children:e})})},g=r(a)(({theme:e})=>({[e.breakpoints.down("sm")]:{display:"flex",justifyContent:"space-between"}})),f=r(n)({display:"flex",padding:"24px"}),j=r(x)(({theme:e})=>({flexDirection:"column",width:"90px",height:"90px",transition:"0.3s ease-out",backgroundColor:e.palette.background.grey,opacity:"0.8",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",borderRadius:"0.85rem",boxShadow:"0 10px 15px rgb(0 0 0 / 20%)",lineHeight:"15px",fontSize:"0.85rem",fontWeight:"bold","& .MuiButton-label":{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"5px"},"& .MuiButton-startIcon":{margin:"0","& .imageIcon":{height:"50px",width:"50px",objectFit:"contain"}},"&:hover":{transform:"scale(1.2)",backgroundColor:e.palette.background.grey}})),y=({src:e,title:i})=>{const o=`/portfolio/icons/${e}.svg`;return t.jsx(l,{title:i,placement:"top",arrow:!0,children:t.jsx(j,{startIcon:t.jsx("img",{className:"imageIcon",src:o,alt:i}),children:i})})},b=({technologies:e})=>t.jsx(n,{container:!0,sx:{padding:"30px"},children:e.map(i=>t.jsx(f,{item:!0,md:2,sm:2,lg:2,justifyContent:"center",alignItems:"center",children:t.jsx(h,{children:t.jsx(y,{src:i.src,title:i.title})})},i.title))}),T=()=>t.jsxs(m,{id:"expertise",children:[t.jsx(c,{sx:{typography:{sm:"h3",md:"h2",lg:"h1"}},children:"Expertise."}),t.jsx(u,{orientation:"horizontal"}),t.jsx(g,{children:t.jsx(b,{technologies:p})})]});export{T as default};