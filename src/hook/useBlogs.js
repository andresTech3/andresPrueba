
import {ContainerBlogs, FechaBlogs,TitleBlogs,HrBlogs,ContainerInfoBlogs,ContainerGenericoBlogs,ContainerInfoPropio} from "../style/ArticleNewGeneral.element"

import InfoBlogs from "../components/InfoBlogs";
const GenericBlogs = (fechaBlogs, titleBlogs, containerInfoPropio) =>{
    return (
        <>
            <ContainerBlogs>
                <FechaBlogs>{fechaBlogs}</FechaBlogs>
                <TitleBlogs>{titleBlogs}</TitleBlogs>
                <HrBlogs/>
                <ContainerInfoBlogs>
                    <ContainerGenericoBlogs>
                        <InfoBlogs/>
                    </ContainerGenericoBlogs>
                    <ContainerInfoPropio>
                        {containerInfoPropio}
                    </ContainerInfoPropio>
                </ContainerInfoBlogs>
            </ContainerBlogs>
        </>
    )
}
export default GenericBlogs;