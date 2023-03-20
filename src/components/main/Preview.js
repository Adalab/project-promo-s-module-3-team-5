import cover from "../../images/cover.jpeg";
import Card from "./Card";

function Preview({ data }) {
    return (
        <section className='preview'>
            <img className='image' src={data.image ? data.image : cover} alt='' />
<Card data={data}></Card>

        </section>
    );
}
export default Preview;