import { BreadCrumbs } from "ui";
import cl from "./NotFound.module.scss"

const NotFound = () => {
    return(
        <section>
            <div className="container">
                <BreadCrumbs />
                <div className={cl.block}>
                    <span className={cl.text}>404</span>
                    <span>Sorry, page not found...</span>
                </div>
            </div>
        </section>
    )
}


export default NotFound;