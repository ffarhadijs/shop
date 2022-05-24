const shorten = (text) => {
    const txt=text.split(' ')
    const newText=`${txt[0]} ${txt[1]} ${txt[2]}`
    return newText
};

export {shorten}