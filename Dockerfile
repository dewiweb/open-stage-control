FROM node

RUN mkdir /open-stage-control
RUN git clone https://github.com/dewiweb/open-stage-control /open-stage-control
WORKDIR /open-stage-control
RUN cd /open-stage-control && npm install && npm run build
#RUN npm run postinstall

ADD run.sh /run.sh

EXPOSE 8080

VOLUME /data

RUN ["chmod", "+x", "/run.sh"]

CMD /run.sh
