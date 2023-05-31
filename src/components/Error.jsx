const Error = ({ mensaje }) => {
    

    return (
        <div className="text-center text-white bg-red-600 font-bold mb-6 p-3 rounded ">
            <p>{mensaje}</p>
        </div>
    )
}

export default Error
