// "use strict";
// function isMatch(s, p){
//     if(p.length===0){return s.length===0}
//     let first_match = !(s.length===0) && (s[0]===p[0] || p[0] === '.')
//     if(p.length>=2 && p[1]==='*'){
//         return (first_match && isMatch(s.substr(1), p)) || isMatch(s, p.substr(2));
//     }else{
//         return first_match && isMatch(s.substr(1), p.substr(1));
//     }
// }
