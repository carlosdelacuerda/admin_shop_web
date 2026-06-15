import bcrypt from 'bcryptjs';

const USER = 'admin';
const PASS = 'mu_babe';

export function validate(u,p){
  return u===USER && p===PASS;
}
