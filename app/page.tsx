export default function Home() {
  return (
    <main style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
      <h1>Horrorjungle</h1>

      <p>
        Horrorjungle is a platform for honest horror movie reviews,
        recommendations, and rankings. We help you decide what’s worth watching
        and where to stream it.
      </p>

      <section>
        <h2>What We Cover</h2>
        <ul>
          <li>In-depth horror movie reviews</li>
          <li>Best horror movies by genre and year</li>
          <li>Streaming availability and recommendations</li>
        </ul>
      </section>

      <section>
        <h2>Coming Soon</h2>
        <p>
          Our review archive is currently being built. New horror reviews and
          rankings are coming soon.
        </p>
      </section>
    </main>
  );
}