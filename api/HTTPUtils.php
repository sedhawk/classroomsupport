<?php

class HTTPUtils
{
    /**
     * The response codes supported by this endpoint
     */
    const HTTP_RESPONSES = array(
        200 => "HTTP/1.1 200 OK",
        201 => "HTTP/1.1 201 Created",
        400 => "HTTP/1.1 400 Bad Request",
        404 => "HTTP/1.1 404 Not Found",
        405 => "HTTP/1.1 405 Method Not Allowed",
        500 => "HTTP/1.1 500 Internal Server Error"
    );

    /**
     * Send a response back to the requester
     * @param $httpStatus - The status code to send back to the requester
     * @param $httpMessage - The status message to return the the requestor
     * @param $headerText - Any text that should be set in the header
     */
    public static function sendResponse($httpStatus, $httpMessage, $headerText=null)
    {
        if(self::HTTP_RESPONSES[$httpStatus])
        {
            http_response_code(self::HTTP_RESPONSES[$httpStatus]);
            if($headerText)
            {
                header($headerText);
            }
            print $httpMessage;
        }
    }
}
