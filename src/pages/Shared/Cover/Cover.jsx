import './Cover.css'
const Cover = ({ img, title, text, textFontFamily, textTransform, height, titleSize, textSize, margin, backgroundColor, contentColor }) => {
    return (
        <div style={{
            background: `url("${img}")`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: `${height}`,
            alignContent: "center"
        }} className="cover mb-20 py-10">
            <div className="cover-content text-white text-center p-12 sm:p-12 md:p-16 lg:p-20 xl:p-22 rounded-3xl" style={{ margin: `${margin}`, backgroundColor: `${backgroundColor}`, color: `${contentColor}`}}>
                <h2 className="cover-title uppercase font-serif font-bold mb-3 " style={{ fontSize: `${titleSize}`, fontFamily: "Cinzel, serif" }}>{title}</h2>
                <p className='cover-text' style={{ textTransform: `${textTransform}`, fontFamily: `${textFontFamily}`, fontSize: `${textSize}` }}>{text}</p>
            </div>
        </div >
    );
};

export default Cover;