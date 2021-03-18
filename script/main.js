
// let removeClass = document.querySelector('.map-tab__y-map');

// addEventListener('click', () => {
//     const item = document.querySelectorAll('.map-tab__y-map').style.display = ('none');
// });


// all controls

// let tabs = function (){

// }



// const tabs = document.querySelectorAll('.map-tab__y-map');

// for (let i = 0; i < tabs.length; i++) {
//     tabs[i].style.display = '';
// }






// const tabList = document.querySelectorAll("[data-tab-block-wrap]");
//   if (tabList) {
//     for (const tabBlock of tabList) {
//       const tabControlList = document.querySelectorAll(`[data-tab-control-wrap = '${tabBlock.dataset.tabBlockWrap}'] [data-tab-control]`);
//       const tabBlockList = tabBlock.querySelectorAll("[data-tab-block]");

//       function tabSwith(tabBlockList, index) {
//         for (const tabBlock of tabBlockList) {
//           tabBlock.style.display = "none";
//         }
//         tabBlockList[index].style.display = "";
//       }

//       tabSwith(tabBlockList, 0);

//       tabControlList.forEach(
//         (tabControl, index) => { tabControl.addEventListener("change", () => { tabSwith(tabBlockList, index); });
//       });
//     }
//   }

/*
const tabs = document.querySelectorAll('.map-tab__y-map:not(:first-child)');
tabs.forEach(item => {
    item.style.display = 'none';
})
document.querySelectorAll('.map-tab__label').f
*/





/*


(() => {
    //const tabList = document.querySelectorAll('.map-tab__y-map:not(:nth-child(1))');
    const tabList = document.querySelectorAll('.map-tab__tabs');
    if (tabList) {
        const tabControlList = document.querySelectorAll('.map-tab__label');
        // console.log(tabControlList);
        // const tabBlockList = document.querySelectorAll('.map-tab__map:not(:nth-child(1))');
        const tabBlockList = document.querySelectorAll('.map-tab__map');
        // console.log(tabBlockList);
        function hidenAllMap(tabMap, index){
            for (const mapList of tabMap) {
                mapList.style.display = "none";
            }
            tabMap[index].style.display = "";
        }

        hidenAllMap(tabBlockList, 0);

        tabControlList.forEach( (tabControl, index) => {
            tabControl.addEventListener("change", () => {
                hidenAllMap(tabBlockList, index); 
            });
        });
    }
})()

*/

/*
(() => {
    const tabList = document.querySelectorAll("[data-tab-block-wrap]");    
    if (tabList) {
        
        for (const tabBlock of tabList) {
            const tabControlList = tabBlock.querySelectorAll(`[data-tab-control-wrap = '${tabBlock.dataset.tabBlockWrap}'] [data-tab-control]`);
            const tabBlockList = tabBlock.querySelectorAll("[data-tab-block]");

            function tabSwift(tabBlockList, index) {
                for (const tabBlock of tabBlockList) {
                    tabBlock.style.display = "none";
                }
                console.log(tabBlockList, index);
                tabBlockList[index].style.display = "flex";
            }

            //console.log(tabBlockList);
            
            tabSwift(tabBlockList, 1);

            // tabControlList.forEach( (tabControl, index) => {
                
            //     tabControl.addEventListener("change", () => {
            //         tabSwift(tabBlockList, index); 
            //     });
            // });
        }
    }
    
})()

*/




(() => {

    const tabList = document.querySelectorAll('.map-tab__tabs');

    if (tabList) {

        const tabControlList = document.querySelectorAll('.map-tab__label');
        const tabBlockList   = document.querySelectorAll('.map-tab__map');

        function hidenAllMap(tabMap, index) {

            for (const mapList of tabMap) {
                mapList.style.display = "none";
            }

            tabMap[index].style.display = "";
        }

        hidenAllMap(tabBlockList, 0);

        tabControlList.forEach( (tabControl, index) => {

            tabControl.addEventListener("change", () => {
                hidenAllMap(tabBlockList, index); 
            });
            
        });
    }

})()


