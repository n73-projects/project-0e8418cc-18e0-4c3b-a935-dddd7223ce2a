import { Button } from "./components/ui/button";
import { CheckCircle, Filter, Users, Clock, TrendingUp, Star, ArrowRight, Brain, Target, Shield } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Filter className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">TalentSift</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-primary font-medium transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary font-medium transition-colors">How it Works</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary font-medium transition-colors">Pricing</a>
          </nav>
          <Button>
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Stop Applying to 
              <span className="text-primary"> Wrong Jobs</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our AI-powered job matching platform finds the perfect software developer positions for your skills, 
              saving you hours of searching while connecting you with companies actively seeking your expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-3 text-lg">
                Try Free for 14 Days
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              ✓ No credit card required  ✓ Upload your resume in under 2 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">75%</div>
              <p className="text-muted-foreground">Less Time Job Searching</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-green-500 mb-2">94%</div>
              <p className="text-muted-foreground">Match Success Rate</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-purple-500 mb-2">2x</div>
              <p className="text-muted-foreground">More Interview Invites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Smart Features That Get You Hired
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI algorithms analyze your skills, experience, and career goals to match you with the perfect developer opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">AI-Powered Job Matching</h3>
              <p className="text-muted-foreground">
                Our machine learning models analyze your technical skills, experience, and career preferences to find perfect job matches.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <Target className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Skill-Based Matching</h3>
              <p className="text-muted-foreground">
                Set your preferred tech stack, salary range, and work style preferences for precise job recommendations.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <Shield className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Privacy First</h3>
              <p className="text-muted-foreground">
                Your profile stays private until you choose to apply. No spam from recruiters, just quality opportunities.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <Clock className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Real-Time Alerts</h3>
              <p className="text-muted-foreground">
                Get instant notifications when new jobs match your criteria. Never miss out on perfect opportunities.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <TrendingUp className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Career Insights</h3>
              <p className="text-muted-foreground">
                Get personalized feedback on your profile and recommendations to improve your job search success.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Company Insights</h3>
              <p className="text-muted-foreground">
                Learn about company culture, tech stacks, and team dynamics before you apply or interview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How TalentSift Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From profile setup to job offers in just three simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Create Your Profile</h3>
              <p className="text-muted-foreground">
                Upload your resume and set your preferences for tech stack, salary, location, and work style in minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Get Matched</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your skills and preferences to find perfect job matches from companies actively hiring developers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Land Your Dream Job</h3>
              <p className="text-muted-foreground">
                Apply to curated opportunities with higher success rates and get interview invitations from interested employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Trusted by Thousands of Developers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "TalentSift found me my dream job in just 2 weeks. The AI matching is incredible - every opportunity was exactly what I was looking for."
              </p>
              <p className="font-semibold text-foreground">Alex Chen, Full Stack Developer</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "I got 3 interview offers in my first week! The platform really understands what companies are looking for."
              </p>
              <p className="font-semibold text-foreground">Maria Rodriguez, React Developer</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Finally, a job platform that doesn't spam me with irrelevant positions. Every match was spot-on for my skills."
              </p>
              <p className="font-semibold text-foreground">David Park, DevOps Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free, upgrade when you find your dream job. No hidden fees, cancel anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Free</h3>
              <div className="text-3xl font-bold text-foreground mb-2">$0</div>
              <p className="text-muted-foreground mb-6">Perfect to get started</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-muted-foreground">Up to 10 job matches/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-muted-foreground">Basic profile matching</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-muted-foreground">Email alerts</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Get Started Free
              </Button>
            </div>
            <div className="bg-card p-8 rounded-xl border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Premium</h3>
              <div className="text-3xl font-bold text-foreground mb-2">$19<span className="text-lg text-muted-foreground">/month</span></div>
              <p className="text-muted-foreground mb-6">For serious job seekers</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-muted-foreground">Unlimited job matches</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-muted-foreground">Advanced AI matching</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-muted-foreground">Priority job alerts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-muted-foreground">Company insights</span>
                </li>
              </ul>
              <Button className="w-full">
                Start Free Trial
              </Button>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Pro</h3>
              <div className="text-3xl font-bold text-foreground mb-2">$39<span className="text-lg text-muted-foreground">/month</span></div>
              <p className="text-muted-foreground mb-6">For career advancement</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-muted-foreground">Everything in Premium</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-muted-foreground">1-on-1 career coaching</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-muted-foreground">Resume optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-muted-foreground">Interview prep support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Find Your Dream Job?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of developers who've found their perfect role with TalentSift. 
            Start your free profile today and let AI do the job hunting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              Create Free Profile
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">TalentSift</span>
              </div>
              <p className="text-muted-foreground">
                AI-powered job matching that helps developers find their perfect role faster.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 TalentSift. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
