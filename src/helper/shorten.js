const shorten = (name) => {
    const split = name.split(" ");
    return `${split[0]} ${split[1]}`
};

export default shorten;