const remove = (id)=>{
    const storeCard =localStorage.getItem('shoping-card')
    if(storeCard){
        const shopingCard= JSON.parse(storeCard)
        if(id in shopingCard){
            delete shopingCard[id];
            localStorage.setItem('shoping-card', JSON.stringify(shopingCard))
        }
    }

}
export {remove}