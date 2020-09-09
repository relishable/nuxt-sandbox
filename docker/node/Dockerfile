FROM openjdk:8-jdk

ENV NODE_VERSION 12
ENV NPM_VERSION 6.11.3

RUN apt-get update && \
    apt-get install --no-install-recommends -y apt-transport-https  && \
    curl -sL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - && \
    apt-get install --no-install-recommends -y nodejs  && \
    npm i -g npm@${NPM_VERSION} && \
    node -v && npm -v && \
    npm i -g npx && \
    apt-get -y autoremove && \
    apt-get -y autoclean && \
    rm -rf /var/lib/apt/lists/*

RUN npm install -g @aws-amplify/cli@4.16.1

WORKDIR ./nuxt

ENV HOST 0.0.0.0
EXPOSE 3000
