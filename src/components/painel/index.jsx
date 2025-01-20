export const Painel = (props) => {

    const {id, children} = props


    return <section id={id} className="h-screen px-4 lg:px-12 flex flex-col justify-center py-8">
        {children}
    </section>
}

