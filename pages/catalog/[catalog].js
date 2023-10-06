import Models from "../../components/ModelsPage/Models";
// import TypesPc from "../../components/ModelsPage/TypesPc";
import axios from 'axios'
import { useRouter } from "next/router";
import LaptopMadelsPage from '../../components/LaptopMadelsPage'

const modulsPage = ({ data }) => {
    const router = useRouter()
    return (
        <>
            {data.level_depth == 0 ? (
                <Models data={data} />
            ) : (
                <LaptopMadelsPage  idData = {data.id}/>
            )}
        </>
    )
}

export const getServerSideProps = async (context) => {
    let data = {}
    await axios
        .get(`https://api.bs365.uz/api/categories?slug=${context.query.catalog}`)
        .then((res) => (data = res.data.data))
        .catch((e) => {
            return { props: {} };
        });
    return {
        props: {
            data: data,
        },
    };
}
export default modulsPage
