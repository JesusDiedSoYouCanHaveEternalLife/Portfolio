import Layout from "./Layout";

function ServicesComponent({items, page}) {
    return ( 
    <Layout page={page}>
    <main className="custom-page">
		<div className="heading">
            <h2 className="heading-back">Services</h2>
            <h2 className="heading-txt"><span className="txt-white">My</span> Services</h2>
        </div>
        <div className="body">
            {items.map((item, index) => (
                <div key={index} className="project">
                    <div className="project-image">
                        <img src={item.image} alt={`Project ${index + 1}`} />
                    </div>
                    <div className="project-info">
                        <h3 className="project-title">{item.title}</h3>
                        <p className="project-description">{item.description}</p>
                    </div>
                </div>
            ))}
            
        </div>
	</main>
    </Layout>);
}

export default ServicesComponent;