import Breadcrump from "../components/common/Breadcrump";
import PageLayout from "../components/common/PageLayout";
import TrainingComponent from "../components/common/TrainingComponent";

const Training = () => {
    let pageTitle = "Training";
    return (
        <PageLayout pageTitle={`${pageTitle}`}>
            <section id="about__page">
                <TrainingComponent />
            </section>
        </PageLayout>
    );
}

export default Training