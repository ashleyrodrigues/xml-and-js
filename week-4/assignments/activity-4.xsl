<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <xsl:for-each select="products/product"></xsl:for-each>
                <table border="3">
                    <tr>
                        <th>Product Name</th>
                        <th>Manufacturer Id</th>
                        <th>Description</th>
                        <th>USD Price</th>
                    </tr>
                    <xsl:for-each select="products/product">
                        <xsl:if test="@shippable = 'true'">
                            <tr>
                                <td><xsl:value-of select="productName"/></td> 
                                <td><xsl:value-of select="manufacturer/@id"/></td> 
                                <td><xsl:value-of select="description"/></td> 
                                <td><xsl:value-of select="prices/price[1]"/></td> 
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
                <br />
                <table border="3">
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>USD Price</th>
                        <th>Euro Price</th>
                    </tr>
                    <xsl:for-each select="products/product">
                    <xsl:if test="manufacturer/@id = 'acme'">
                        <tr>
                            <td><xsl:value-of select="productName"/></td> 
                            <td><xsl:value-of select="description"/></td> 
                            <td><xsl:value-of select="prices/price[1]"/></td> 
                            <td><xsl:value-of select="prices/price[last()]"/></td> 
                        </tr>
                    </xsl:if>
                </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>