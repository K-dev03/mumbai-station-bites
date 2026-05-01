import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Train } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { toast } from 'sonner';

const SignupPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  // ================= EMAIL AUTO FIX =================
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value.includes('@')) {
      const [part] = value.split('@');
      value = part + '@gmail.com';
    }

    setEmail(value);
  };

  // ================= PASSWORD RULES (SIMPLIFIED) =================
  const isLengthValid = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumberOrSpecial = /(\d|[@#$%^&*!])/.test(password);

  const isPasswordValid =
    isLengthValid && hasUpper && hasNumberOrSpecial;

  // ================= SUBMIT =================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error('All fields are required');
      return;
    }

    if (!email.includes('@gmail.com')) {
      toast.error('Only Gmail allowed');
      return;
    }

    if (!isPasswordValid) {
      toast.error('Password does not meet requirements');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'Signup failed');
        return;
      }

      toast.success('Account created successfully!');
      navigate('/login');
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
            <div className="w-14 h-14 mx-auto gradient-primary flex items-center justify-center rounded-full">
              <Train className="text-white" />
            </div>
            <h1 className="text-2xl font-bold mt-2">Create Account</h1>
          </CardHeader>

          <CardContent>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* NAME */}
              <div>
                <Label>Name</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* EMAIL */}
              <div>
                <Label>Email (Gmail only)</Label>
                <Input
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              {/* PASSWORD */}
              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* 🔥 SIMPLIFIED RULES */}
                <ul className="text-xs mt-2 space-y-1">

                  <li className={isLengthValid ? "text-green-500" : "text-red-500"}>
                    • At least 8 characters
                  </li>

                  <li className={hasUpper ? "text-green-500" : "text-red-500"}>
                    • At least 1 uppercase letter
                  </li>

                  <li className={hasNumberOrSpecial ? "text-green-500" : "text-red-500"}>
                    • At least 1 number or special character
                  </li>

                </ul>
              </div>

              {/* BUTTON */}
              <Button
                disabled={isLoading || !isPasswordValid}
                className="w-full"
              >
                {isLoading ? 'Creating...' : 'Sign Up'}
              </Button>

            </form>

            <p className="text-center mt-4 text-sm">
              Already have account?{' '}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>

          </CardContent>
        </Card>

      </motion.div>

    </div>
  );
};

export default SignupPage;