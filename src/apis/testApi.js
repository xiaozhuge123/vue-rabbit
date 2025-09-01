import httpInstance from "@/utils/http.js";

export function getCategary(){
  return httpInstance({
    url:'home/category/head'
  })
}
