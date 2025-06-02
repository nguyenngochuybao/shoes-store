import Categories from "./categories";

function Home ()
{
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <h1>Give Your Workout <br /> A NeW Style</h1>
                    <p>Success isn't always about greatness. It's about consistency. Consistent <br /> hard work gains
                        Success.
                        greatness will come.
                    </p>
                    <a href="#" className="btn">Explore Now &#8594;</a>

                </div>
                <div className="col-2">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ff338495-b0e4-459b-9605-ecec2131df30/dc64sy5-25f9e302-2810-4b67-845c-4104d1bbbb5f.png/v1/fill/w_1280,h_1819/messi_png_by_flashdsg_dc64sy5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxOSIsInBhdGgiOiJcL2ZcL2ZmMzM4NDk1LWIwZTQtNDU5Yi05NjA1LWVjZWMyMTMxZGYzMFwvZGM2NHN5NS0yNWY5ZTMwMi0yODEwLTRiNjctODQ1Yy00MTA0ZDFiYmJiNWYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.X5IqSJX1CH9ymTqppoDKOG2bBIB6I8V-RgQYqqz0mVs" />
                </div>
            </div>
            <Categories />
        </>
    );
}

export default Home;

