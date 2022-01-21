import md5 from "md5";
export const KEY_PUBLIC = "389b1414f2645bd56dacde3388560d92";
export const KEY_PRIVATE = "056aa41c79e7c4f5ab456ee89ca4b3a2b5b8a532";
export const DATETIME = new Date().getTime();
export const KEY_HASH = md5(DATETIME + KEY_PRIVATE + KEY_PUBLIC);
export const API_URL = "http://gateway.marvel.com/v1/public";
