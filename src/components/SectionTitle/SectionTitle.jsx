
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center md:w-4/12 mx-auto">
            <p className="text-yellow-600 mb-3">---{subHeading}---</p>
            <h3 className="uppercase text-4xl border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;