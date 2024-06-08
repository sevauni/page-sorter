import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/hooks/use-theme.hook';
import { Label } from './ui/label';
import { Switch } from './ui/switch';

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme();
  const labelText = theme === 'dark' ? 'Dark' : 'Light';
  return (
    <div className="flex items-center space-x-2 absolute right-0 m-2">
      <Label htmlFor="theme">{labelText}</Label>
      <Switch
        id="theme"
        onCheckedChange={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      />
    </div>
  );
};
