export const ErrorBlock = (activeInp, typeErr ) => {
    if(typeErr && activeInp) {
        return <div className="err">{typeErr}</div>
    } else {
        return '';
    }
}