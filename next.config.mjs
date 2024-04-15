/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"image-cdn.hypb.st",
                port:"",
               
            }
        ]
    }
};

export default nextConfig;
