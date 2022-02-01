<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <xsl:for-each select="products/product"></xsl:for-each>
                <table border="3">
                    <tr>
                        <th>Product Name</th>
                    </tr>
                    <xsl:for-each select="products/product">
                        <tr>
                            <td>
                                <xsl:value-of select="productName" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                <br />
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>