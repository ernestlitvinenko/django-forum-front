import BaseLayout from "../components/base";

const Index = (pageProps: object) => {
    console.log(pageProps)
    return(
        <BaseLayout title={'Главная'}>
            <>
                <h1>Index Page</h1>
                <h2>Главная страница</h2>
            </>
        </BaseLayout>
    )
}

export default Index;