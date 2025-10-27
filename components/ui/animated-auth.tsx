"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Sparkles } from "lucide-react";

interface PupilProps {
  size?: number;
  maxDistance?: number;
  pupilColor?: string;
  forceLookX?: number;
  forceLookY?: number;
}

const Pupil = ({ 
  size = 12, 
  maxDistance = 5,
  pupilColor = "black",
  forceLookX,
  forceLookY
}: PupilProps) => {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const pupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculatePupilPosition = () => {
    if (!pupilRef.current) return { x: 0, y: 0 };

    if (forceLookX !== undefined && forceLookY !== undefined) {
      return { x: forceLookX, y: forceLookY };
    }

    const pupil = pupilRef.current.getBoundingClientRect();
    const pupilCenterX = pupil.left + pupil.width / 2;
    const pupilCenterY = pupil.top + pupil.height / 2;

    const deltaX = mouseX - pupilCenterX;
    const deltaY = mouseY - pupilCenterY;
    const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), maxDistance);

    const angle = Math.atan2(deltaY, deltaX);
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return { x, y };
  };

  const pupilPosition = calculatePupilPosition();

  return (
    <div
      ref={pupilRef}
      className="rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: pupilColor,
        transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    />
  );
};

interface AnimatedAuthProps {
  mode: 'signin' | 'signup';
  onSubmit: (email: string, password: string, name?: string) => Promise<void>;
  isLoading?: boolean;
  error?: string;
  otherPageLink?: string;
}

export function AnimatedAuth({ mode, onSubmit, isLoading = false, error = "", otherPageLink }: AnimatedAuthProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const [isPurpleBlinking, setIsPurpleBlinking] = useState(false);
  const [isBlackBlinking, setIsBlackBlinking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isLookingAtEachOther, setIsLookingAtEachOther] = useState(false);
  const [isPurplePeeking, setIsPurplePeeking] = useState(false);
  const purpleRef = useRef<HTMLDivElement>(null);
  const blackRef = useRef<HTMLDivElement>(null);
  const yellowRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const getRandomBlinkInterval = () => Math.random() * 4000 + 3000;

    const scheduleBlink = () => {
      const blinkTimeout = setTimeout(() => {
        setIsPurpleBlinking(true);
        setTimeout(() => {
          setIsPurpleBlinking(false);
          scheduleBlink();
        }, 150);
      }, getRandomBlinkInterval());

      return blinkTimeout;
    };

    const timeout = scheduleBlink();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const getRandomBlinkInterval = () => Math.random() * 4000 + 3000;

    const scheduleBlink = () => {
      const blinkTimeout = setTimeout(() => {
        setIsBlackBlinking(true);
        setTimeout(() => {
          setIsBlackBlinking(false);
          scheduleBlink();
        }, 150);
      }, getRandomBlinkInterval());

      return blinkTimeout;
    };

    const timeout = scheduleBlink();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isTyping) {
      setIsLookingAtEachOther(true);
      const timer = setTimeout(() => {
        setIsLookingAtEachOther(false);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setIsLookingAtEachOther(false);
    }
  }, [isTyping]);

  useEffect(() => {
    if (password.length > 0 && showPassword) {
      const schedulePeek = () => {
        const peekInterval = setTimeout(() => {
          setIsPurplePeeking(true);
          setTimeout(() => {
            setIsPurplePeeking(false);
          }, 800);
        }, Math.random() * 3000 + 2000);
        return peekInterval;
      };

      const firstPeek = schedulePeek();
      return () => clearTimeout(firstPeek);
    } else {
      setIsPurplePeeking(false);
    }
  }, [password, showPassword, isPurplePeeking]);

  const calculatePosition = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return { faceX: 0, faceY: 0, bodySkew: 0 };

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 3;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const faceX = Math.max(-15, Math.min(15, deltaX / 20));
    const faceY = Math.max(-10, Math.min(10, deltaY / 30));
    const bodySkew = Math.max(-6, Math.min(6, -deltaX / 120));

    return { faceX, faceY, bodySkew };
  };

  const purplePos = calculatePosition(purpleRef);
  const blackPos = calculatePosition(blackRef);
  const yellowPos = calculatePosition(yellowRef);
  const orangePos = calculatePosition(orangeRef);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email, password, name);
  };

  const isSignIn = mode === 'signin';

  return (
    <div className="min-h-screen grid lg:grid-cols-2 overflow-hidden">
      {/* Left Content Section */}
      <div className="relative hidden lg:flex flex-col justify-between bg-gradient-to-br from-primary/90 via-primary to-primary/80 p-12 text-primary-foreground overflow-hidden">
        <div className="relative z-20">
          <a href="/" className="flex items-center gap-2 text-lg font-semibold hover:opacity-80 transition-opacity cursor-pointer">
            <div className="size-8 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="size-4" />
            </div>
            <span>BizCanvas</span>
          </a>
        </div>

        <div className="relative z-20 flex items-end justify-center h-[500px]">
          {/* Cartoon Characters Container */}
          <div className="relative" style={{ width: '550px', height: '400px' }}>
            {/* Purple character - Back left */}
            <div 
              ref={purpleRef}
              className="absolute bottom-0 transition-all duration-700 ease-in-out"
              style={{
                left: isPurplePeeking ? '100px' : '20px',
                transform: `skewY(${purplePos.bodySkew}deg)`,
                transformOrigin: 'bottom',
              }}
            >
              <div className="w-36 h-80 bg-[#8B5CF6] rounded-t-[70px] relative overflow-hidden">
                <div 
                  className="absolute w-full h-full transition-all duration-300"
                  style={{
                    transform: `translate(${purplePos.faceX}px, ${purplePos.faceY}px)`,
                  }}
                >
                  <div className="absolute flex gap-5" style={{ left: '36px', top: '50px' }}>
                    <div
                      className="rounded-full flex items-center justify-center bg-white transition-all duration-150"
                      style={{
                        width: '26px',
                        height: isPurpleBlinking ? '2px' : '26px',
                      }}
                    >
                      {!isPurpleBlinking && <Pupil size={13} maxDistance={5} pupilColor="#2D2D2D" />}
                    </div>
                    <div
                      className="rounded-full flex items-center justify-center bg-white transition-all duration-150"
                      style={{
                        width: '26px',
                        height: isPurpleBlinking ? '2px' : '26px',
                      }}
                    >
                      {!isPurpleBlinking && <Pupil size={13} maxDistance={5} pupilColor="#2D2D2D" />}
                    </div>
                  </div>
                  <div 
                    className="absolute w-11 h-1 bg-[#2D2D2D] rounded-full"
                    style={{ left: '52px', top: '95px' }}
                  />
                </div>
              </div>
            </div>

            {/* Black character - Front left */}
            <div 
              ref={blackRef}
              className="absolute bottom-0 transition-all duration-700 ease-in-out"
              style={{
                left: '120px',
                transform: `skewY(${blackPos.bodySkew}deg)`,
                transformOrigin: 'bottom',
                zIndex: 10,
              }}
            >
              <div className="w-36 h-80 bg-[#1F2937] rounded-t-[70px] relative overflow-hidden">
                <div 
                  className="absolute w-full h-full transition-all duration-300"
                  style={{
                    transform: `translate(${blackPos.faceX}px, ${blackPos.faceY}px)`,
                  }}
                >
                  <div className="absolute flex gap-5" style={{ left: '36px', top: '50px' }}>
                    <div
                      className="rounded-full flex items-center justify-center bg-white transition-all duration-150"
                      style={{
                        width: '26px',
                        height: isBlackBlinking ? '2px' : '26px',
                      }}
                    >
                      {!isBlackBlinking && <Pupil size={13} maxDistance={6} pupilColor="#2D2D2D" />}
                    </div>
                    <div
                      className="rounded-full flex items-center justify-center bg-white transition-all duration-150"
                      style={{
                        width: '26px',
                        height: isBlackBlinking ? '2px' : '26px',
                      }}
                    >
                      {!isBlackBlinking && <Pupil size={13} maxDistance={6} pupilColor="#2D2D2D" />}
                    </div>
                  </div>
                  <div 
                    className="absolute w-11 h-1 bg-[#2D2D2D] rounded-full"
                    style={{ left: '52px', top: '95px' }}
                  />
                </div>
              </div>
            </div>

            {/* Yellow character - Back right */}
            <div 
              ref={yellowRef}
              className="absolute bottom-0 transition-all duration-700 ease-in-out"
              style={{
                right: '120px',
                transform: `skewY(${yellowPos.bodySkew}deg)`,
                transformOrigin: 'bottom',
              }}
            >
              <div className="w-36 h-80 bg-[#FCD34D] rounded-t-[70px] relative overflow-hidden">
                <div 
                  className="absolute w-full h-full transition-all duration-300"
                  style={{
                    transform: `translate(${yellowPos.faceX}px, ${yellowPos.faceY}px)`,
                  }}
                >
                  <div className="absolute flex gap-5" style={{ left: '36px', top: '50px' }}>
                    <div className="rounded-full w-[26px] h-[26px] bg-white flex items-center justify-center">
                      <Pupil size={13} maxDistance={5} pupilColor="#2D2D2D" />
                    </div>
                    <div className="rounded-full w-[26px] h-[26px] bg-white flex items-center justify-center">
                      <Pupil size={13} maxDistance={5} pupilColor="#2D2D2D" />
                    </div>
                  </div>
                  <div 
                    className="absolute w-20 h-[4px] bg-[#2D2D2D] rounded-full transition-all duration-200 ease-out"
                    style={{
                      left: '52px',
                      top: '95px',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Orange character - Front right */}
            <div 
              ref={orangeRef}
              className="absolute bottom-0 transition-all duration-700 ease-in-out"
              style={{
                right: '20px',
                transform: `skewY(${orangePos.bodySkew}deg)`,
                transformOrigin: 'bottom',
                zIndex: 10,
              }}
            >
              <div className="w-36 h-80 bg-[#FB923C] rounded-t-[70px] relative overflow-hidden">
                <div 
                  className="absolute w-full h-full transition-all duration-300"
                  style={{
                    transform: `translate(${orangePos.faceX}px, ${orangePos.faceY}px)`,
                  }}
                >
                  <div className="absolute flex gap-5" style={{ left: '36px', top: '50px' }}>
                    <div className="rounded-full w-[26px] h-[26px] bg-white flex items-center justify-center">
                      <Pupil size={13} maxDistance={5} pupilColor="#2D2D2D" />
                    </div>
                    <div className="rounded-full w-[26px] h-[26px] bg-white flex items-center justify-center">
                      <Pupil size={13} maxDistance={5} pupilColor="#2D2D2D" />
                    </div>
                  </div>
                  <div 
                    className="absolute w-20 h-[4px] bg-[#2D2D2D] rounded-full"
                    style={{ left: '52px', top: '95px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 flex items-center gap-8 text-sm text-primary-foreground/60">
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Contact
          </a>
        </div>

        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="absolute top-1/4 right-1/4 size-64 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 size-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      {/* Right Form Section */}
      <div className="flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-[420px]">
          <div className="lg:hidden flex items-center justify-center gap-2 text-lg font-semibold mb-12">
            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="size-4 text-primary" />
            </div>
            <span>BizCanvas</span>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              {isSignIn ? 'Welcome back!' : 'Create your account'}
            </h1>
            <p className="text-muted-foreground text-sm">
              {isSignIn ? 'Please enter your details' : 'Start building your business model'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isSignIn && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setIsTyping(true)}
                  onBlur={() => setIsTyping(false)}
                  required
                  className="h-12 bg-background border-border/60 focus:border-primary"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsTyping(true)}
                onBlur={() => setIsTyping(false)}
                required
                className="h-12 bg-background border-border/60 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsTyping(true)}
                  onBlur={() => setIsTyping(false)}
                  required
                  className="h-12 pr-10 bg-background border-border/60 focus:border-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
            </div>

            {isSignIn && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label
                    htmlFor="remember"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Remember for 30 days
                  </Label>
                </div>
                <a
                  href="#"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Forgot password?
                </a>
              </div>
            )}

            {error && (
              <div className="p-3 text-sm text-red-400 bg-red-950/20 border border-red-900/30 rounded-lg">
                {error}
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full h-12 text-base font-medium" 
              size="lg" 
              disabled={isLoading}
            >
              {isLoading ? (isSignIn ? "Signing in..." : "Creating account...") : (isSignIn ? "Log in" : "Sign up")}
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground mt-8">
            {isSignIn ? "Don&apos;t have an account?" : "Already have an account?"}{" "}
            <a href={otherPageLink || (isSignIn ? '/auth/signup' : '/auth/signin')} className="text-foreground font-medium hover:underline">
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
