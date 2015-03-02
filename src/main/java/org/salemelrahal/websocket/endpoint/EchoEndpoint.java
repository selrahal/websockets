package org.salemelrahal.websocket.endpoint;

import java.io.IOException;

import javax.ejb.Stateless;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@ServerEndpoint("/echo")
@Stateless
public class EchoEndpoint {
	private static final Logger LOG = LoggerFactory.getLogger(EchoEndpoint.class);
	
    @OnOpen
    public void onOpen(Session session){
        LOG.info(session.getId() + " has opened a connection"); 
    }
 
    @OnMessage
    public void onMessage(String message, Session session){
    	LOG.info("Message from " + session.getId() + ": " + message);
        try {
            session.getBasicRemote().sendText("ECHO:" + message);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
 
    @OnClose
    public void onClose(Session session){
    	LOG.info("Session " +session.getId()+" has ended");
    }
}
