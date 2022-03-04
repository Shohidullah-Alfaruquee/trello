
const idGenerator = () => {
    const Arr = [
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ]
        const alph = Arr[Math.floor(Math.random()*(Arr.length-1))]
        const id = `${Math.floor(1+Math.random()*1000)*Date.now()*Math.floor(1+Math.random()*10)}${alph}`
    return id
}

export default idGenerator


