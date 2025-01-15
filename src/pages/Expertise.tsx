export function Expertise() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Expertise</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {/* Expertise Cards */}
        <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
          <p className="text-muted-foreground">
            Full-stack development solutions using cutting-edge technologies.
          </p>
        </div>
        <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-4">Mobile Development</h3>
          <p className="text-muted-foreground">
            Cross-platform mobile applications for iOS and Android.
          </p>
        </div>
        <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
          <p className="text-muted-foreground">
            Scalable cloud infrastructure and deployment strategies.
          </p>
        </div>
      </div>
    </div>
  )
} 