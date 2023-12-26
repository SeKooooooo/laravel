
export const ChangeEnding = (name) => {
    const nameList = name.split(' ')
    if (nameList[1]){
        nameList[1]=nameList[1]+'у'
        nameList[0]=nameList[0].slice(0,-2)+'ому'
        return `${nameList[0]} ${nameList[1]}`
    }
    nameList[0]=nameList[0].slice(0,-1)+'е'
    return nameList[0]
}

