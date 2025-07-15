// Tipos para los roles del sistema
export type Role = 'guest' | 'user' | 'admin';

// Jerarquía de roles para validación
export const ROLE_HIERARCHY: Record<Role, number> = {
  'guest': 1,
  'user': 2,
  'admin': 3
};

// Utilidad para verificar si un rol tiene permisos suficientes
export const hasPermission = (userRole: Role | null, requiredRole: Role): boolean => {
  if (!userRole) return false;
  
  const userLevel = ROLE_HIERARCHY[userRole] || 0;
  const requiredLevel = ROLE_HIERARCHY[requiredRole] || 0;
  
  return userLevel >= requiredLevel;
};

// Definiciones de permisos por rol
export const PERMISSIONS = {
  guest: {
    canViewPublicPages: true,
    canViewUserPages: false,
    canViewAdminPages: false,
  },
  user: {
    canViewPublicPages: true,
    canViewUserPages: true,
    canViewAdminPages: false,
  },
  admin: {
    canViewPublicPages: true,
    canViewUserPages: true,
    canViewAdminPages: true,
  }
} as const;
