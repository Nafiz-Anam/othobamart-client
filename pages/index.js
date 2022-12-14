import HomeHeader from "../components/home/header";
import HomeContent from "../components/home/HomeContent/HomeContent";
import HomeLayout from "../components/layouts/homeLayout";
import Notify from "/components/notify/Notify";

export default function Home() {
    return (
        <>
            <HomeLayout title="Othoba Mart | Best Online E-commerce Shopping">
                <Notify />
                <HomeHeader />
                <HomeContent />
            </HomeLayout>
        </>
    );
}
