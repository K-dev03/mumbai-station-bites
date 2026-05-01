import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Train, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { toast } from 'sonner';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Gmail auto-fix
  const handleEmailBlur = () => {
    let value = email.trim();

    if (value && !value.includes('@gmail.com')) {
      if (value.includes('@')) {
        value = value.split('@')[0] + '@gmail.com';
      } else {
        value = value + '@gmail.com';
      }
    }

    setEmail(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('All fields required');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'Login failed');
        return;
      }

      // save JWT token
      localStorage.setItem('token', data.token);

      toast.success('Login successful!');
      navigate('/');

    } catch (error) {
      toast.error('Server error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card>

          <CardHeader className="text-center">
            <div className="w-14 h-14 mx-auto rounded-full gradient-primary flex items-center justify-center">
              <Train className="w-7 h-7 text-white" />
            </div>

            <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
            <p className="text-muted-foreground">Login to continue</p>
          </CardHeader>

          <CardContent>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* EMAIL */}
              <div>
                <Label>Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleEmailBlur}
                  required
                />
              </div>

              {/* PASSWORD */}
              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? 'Logging in...' : (
                  <>
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </>
                )}
              </Button>

            </form>

            <p className="text-center mt-4 text-sm">
              New user?{' '}
              <Link to="/signup" className="text-primary font-semibold">
                Sign Up
              </Link>
            </p>

          </CardContent>
        </Card>
      </motion.div>

    </div>
  );
};

export default LoginPage;