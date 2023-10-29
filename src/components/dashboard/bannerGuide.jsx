import "./banners/css/banners.css";
const BannerGuide = ({ closeFunction }) => {
    return (
        <>
            <div className="pp-overlay" >
                <aside role="dialog" className="popup-warn">
                    <main>
                        <h3> Guia de banners: </h3>
                        <section className="principal_banner">
                            <div>
                                <b>principal_banner</b>
                            </div>
                        </section>
                        <section>
                            <b>category_banner</b>
                            <div className="preview_category" />
                            <div className="preview_category" />
                            <div className="preview_category" />
                        </section>
                    </main>
                    <button onClick={closeFunction} className="accept">Cerrar</button>
                </aside>
            </div>

        </>

    )
}

export default BannerGuide;