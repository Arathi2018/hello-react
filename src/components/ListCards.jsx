function ListCards({ listcard }) {
    return (
    <>
        {
            listcard.map((items) => (
            <div key={items.id} className="flex flex-row justify-between items-center gap-2 mb-[30px]">
                <div className="flex flex-col items-start">
                    <h1 className="text-[18px] font-semibold text-white">{items.title}</h1>
                    <span className="text-[16px] text-white/70 font-normal mt-1">{items.desc}</span>
                </div>
                <span className="text-[18px] text-white font-semibold">{items.year}</span>
            </div>
        ))
        }
    </>
    )
}
export default ListCards