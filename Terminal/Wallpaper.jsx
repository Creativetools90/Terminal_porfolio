
function Wallpaper(props){
    
    return(
        <>
        <div className="wallpaper"  >
            {
                props.imgIndex?<img src={props.imgAPi[props.imgIndex].img} className="wall_img" alt="wallpaper" /> :<img src={props.imgAPi[0].img} className="wall_img" alt="wallpaper" />
            }
            
        </div>
        </>
    )
}
export default Wallpaper;