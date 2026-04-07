function ListCards({ listcard }) {
    return (
    <>
        {
            listcard.map((items) => (
            <div key={items.id} className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-2 mb-[30px]">
                <div className="flex flex-col items-start">
                    <h1 className="text-[18px] font-semibold text-white">{items.title}</h1>
                    <span className="text-[16px] text-white md:text-white/70 font-normal mt-1">{items.desc}</span>
                </div>
                <span className="text-[14px] md:text-[18px] text-white/70 md:text-white font-normal md:font-semibold">{items.year}</span>
            </div>
        ))
        }
    </>
    )
}
export default ListCards