package com.alita.admin.controller;

import com.alita.common.domain.model.HttpResponse;
import com.alita.common.util.file.FileManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

/**
 * 文件管理接口
 * @author: alita
 */
@RequestMapping("/file")
@RestController
public class SysFileController {

    @Resource
    private FileManager fileManager;

    /**
     * 上传文件
     * @param file
     * @return {@link HttpResponse}
     * @throws IOException
     */
    @PostMapping("/upload")
    public HttpResponse upload(MultipartFile file) {
        String fileName = fileManager.upload(file);

        return HttpResponse.success("上传成功！",fileName);
    }

    /**
     * 下载文件
     * @param fileName
     * @param response
     * @throws FileNotFoundException
     */
    @GetMapping("/download")
    public void download(String fileName, HttpServletResponse response) throws FileNotFoundException {
        InputStream inputStream = fileManager.download(fileName);

        //下载文件的响应类型，这里统一设置成了文件流
        response.setContentType("application/octet-stream;charset=utf-8");
        response.addHeader("Content-Disposition", "attachment;filename=" + fileName);

        try (BufferedInputStream bis = new BufferedInputStream(inputStream)) {
            ServletOutputStream outputStream = response.getOutputStream();
            byte[] bytes = new byte[1024];
            int len;
            while ((len = bis.read(bytes)) != -1) {
                outputStream.write(bytes, 0, len);
            }
        } catch (Exception ex) {
            return;
        }
    }

    /**
     * 删除文件
     * @param fileName
     * @return {@link HttpResponse}
     */
    @GetMapping("/delete")
    public HttpResponse delete(String fileName) {
        fileManager.delete(fileName);

        return HttpResponse.success(fileName + "，删除成功!");
    }

}
