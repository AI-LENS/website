export function Careers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
      <div className="space-y-8">
        {/* Job Listings */}
        <div className="rounded-lg border p-6">
          <h3 className="text-2xl font-semibold mb-2">Senior Frontend Developer</h3>
          <p className="text-muted-foreground mb-4">
            We're looking for an experienced frontend developer to join our team.
          </p>
          <div className="flex gap-4">
            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
              Full-time
            </span>
            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
              Remote
            </span>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-2xl font-semibold mb-2">Backend Engineer</h3>
          <p className="text-muted-foreground mb-4">
            Join us in building scalable backend solutions.
          </p>
          <div className="flex gap-4">
            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
              Full-time
            </span>
            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
              Hybrid
            </span>
          </div>
        </div>
      </div>
    </div>
  )
} 